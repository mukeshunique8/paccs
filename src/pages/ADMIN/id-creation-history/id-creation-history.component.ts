import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LocalStoreService } from '../../../service/local-store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdCreationStatus } from '../../../constants/enumdata';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../../../modules/shared.module';
import { NgPrimeModule } from '../../../modules/ngprime.module';

interface User {
  sno: number;
  name: string;
  email: string;
  mobileNo: string;
  whatsappNo: string;
  address: string;
  district: string;
  taluk: string;
  village: string;
  status: string;
  [key: string]: any; // For dynamic properties
}

@Component({
  selector: 'app-id-creation-history',
  standalone: true,
  imports: [SharedModule, NgPrimeModule, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './id-creation-history.component.html',
  styleUrls: ['./id-creation-history.component.css'],
})
export class IdCreationHistoryComponent implements OnInit {
  users: User[] = [];
  cols: any[] = [];
  selectedUser: User | null = null;
  showApproveDialog = false;
  showRejectDialog = false;
  showDetailsDialog = false;

  // Options for form controls
  paymentTypeOptions = [
    { label: 'Full', value: 'Full' },
    { label: 'Partial', value: 'Partial' },
  ];

  paymentModeOptions = [
    { label: 'Cash', value: 'Cash' },
    { label: 'Card', value: 'Card' },
    { label: 'Online', value: 'Online' },
  ];

  trainingAreaOptions = [
    { label: 'Agriculture', value: 'Agriculture' },
    { label: 'Animal Husbandry', value: 'Animal Husbandry' },
    { label: 'Fisheries', value: 'Fisheries' },
  ];

  adminOptions = [
    { label: 'Admin 1', value: 'Admin 1' },
    { label: 'Admin 2', value: 'Admin 2' },
  ];

  approvalForm: FormGroup;
  rejectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private localStoreService: LocalStoreService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {
    this.approvalForm = this.fb.group({
      idNumber: ['', Validators.required],
      receiptNumber: ['', Validators.required],
      amountPaid: [0, [Validators.required, Validators.min(1)]],
      paymentType: ['', Validators.required],
      modeOfPayment: ['', Validators.required],
      trainingArea: ['', Validators.required],
      adminName: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      district: ['', Validators.required],
      taluk: ['', Validators.required],
      village: ['', Validators.required],
    });

    this.rejectForm = this.fb.group({
      remarks: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.initializeColumns();
    this.loadUsers();
  }

  initializeColumns(): void {
    this.cols = [
      { field: 'sno', header: 'S.No' },
      { field: 'action', header: 'Action' },
      { field: 'status', header: 'Status' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'mobileNo', header: 'Mobile No' },
      { field: 'whatsappNo', header: 'WhatsApp No' },
      { field: 'address', header: 'Address' },
      { field: 'district', header: 'District' },
      { field: 'taluk', header: 'Taluk' },
      { field: 'village', header: 'Village' },
    ];
  }

  loadUsers() {
    const arr =
      this.localStoreService.getArray<any>('idCreationDataArray') || [];
    this.users = arr.map((user, i) => ({
      ...user,
      sno: i + 1,
      district: user.district?.name || user.district,
      taluk: user.taluk?.name || user.taluk,
      village: user.village?.name || user.village,
    }));
    console.log('Loaded Users:', this.users);
  }

  approve(user: User) {
    this.selectedUser = user;
    this.approvalForm.patchValue({
      mobileNo: user.mobileNo,
      email: user.email,
      address: user.address,
      district: user.district,
      taluk: user.taluk,
      village: user.village,
    });
    this.showApproveDialog = true;
  }

  reject(user: User) {
    this.selectedUser = user;
    this.rejectForm.reset();
    this.showRejectDialog = true;
  }
  viewDetails(user: User) {
    this.selectedUser = user;
    this.showDetailsDialog = true;
  }

  confirmApproval() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to approve this ID creation?',
      header: 'Confirm Approval',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.submitApproval();
      },
    });
  }

  confirmRejection() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to reject this ID creation?',
      header: 'Confirm Rejection',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.submitRejection();
      },
    });
  }

  submitApproval() {
    if (this.approvalForm.invalid || !this.selectedUser) return;

    const approvalData = this.approvalForm.value;
    const updatedUser = {
      ...this.selectedUser,
      approvalData: { ...approvalData }, // Store approval data separately
      status: IdCreationStatus.Approved,
      approvedDate: new Date().toISOString(),
    };

    this.updateUserInStore(updatedUser);
    this.showApproveDialog = false;
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'ID Approved Successfully',
    });
  }

  submitRejection() {
    if (this.rejectForm.invalid || !this.selectedUser) return;

    const updatedUser = {
      ...this.selectedUser,
      rejectionRemarks: this.rejectForm.value.remarks,
      status: IdCreationStatus.Rejected,
      rejectedDate: new Date().toISOString(),
    };

    this.updateUserInStore(updatedUser);
    this.showRejectDialog = false;
    this.messageService.add({
      severity: 'warn',
      summary: 'Rejected',
      detail: 'ID Rejected',
    });
  }

  private updateUserInStore(updatedUser: User) {
    const arr =
      this.localStoreService.getArray<any>('idCreationDataArray') || [];
    const idx = arr.findIndex((u) => u.email === updatedUser.email);

    if (idx !== -1) {
      // Preserve original data and merge with updates
      const originalUser = arr[idx];
      const finalUser = {
        ...originalUser,
        ...updatedUser,
        // Don't overwrite these original properties with undefined
        district: updatedUser.district || originalUser.district,
        taluk: updatedUser.taluk || originalUser.taluk,
        village: updatedUser.village || originalUser.village,
      };

      this.localStoreService.updateInArray(
        'idCreationDataArray',
        idx,
        finalUser,
      );
      this.loadUsers();
    }
  }

  get districtOptions() {
    const districts = new Set(this.users.map((u) => u.district));
    // console.log('Districts:', districts);
    return Array.from(districts).map((d) => ({ name: d, code: d }));
  }

  get talukOptions() {
    const selectedDistrict = this.approvalForm.get('district')?.value;
    if (!selectedDistrict) return [];

    const tuks = new Set(
      this.users
        .filter((u) => u.district === selectedDistrict)
        .map((u) => u.taluk),
    );
    return Array.from(tuks).map((t) => ({ name: t, code: t }));
  }

  get villageOptions() {
    const selectedTaluk = this.approvalForm.get('taluk')?.value;
    if (!selectedTaluk) return [];

    const villages = new Set(
      this.users.filter((u) => u.taluk === selectedTaluk).map((u) => u.village),
    );
    return Array.from(villages).map((v) => ({ name: v, code: v }));
  }

  onDistrictChange() {
    this.approvalForm.patchValue({
      taluk: null,
      village: null,
    });
  }

  onTalukChange() {
    this.approvalForm.patchValue({
      village: null,
    });
  }
  getStatusSeverity(status: string): string {
    switch (status) {
      case IdCreationStatus.Approved:
        return 'success';
      case IdCreationStatus.Rejected:
        return 'danger';
      case IdCreationStatus.Pending:
        return 'warning';
      default:
        return 'info';
    }
  }
}
