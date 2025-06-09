import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../modules/shared.module';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgPrimeModule } from '../../../modules/ngprime.module';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { LocalStoreService } from '../../../service/local-store.service';

interface State {
  name: string;
  code: string;
}

interface District {
  name: string;
  code: string;
  stateCode: string;
}

interface Circle {
  name: string;
  code: string;
  districtCode: string;
}

interface Taluk {
  name: string;
  code: string;
  circleCode: string;
}

interface Village {
  name: string;
  code: string;
  talukCode: string;
}

@Component({
  selector: 'app-id-creation',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    SelectButtonModule,
    ButtonModule,
    CardModule,
    SelectModule,
    TextareaModule,
    MessageModule,
    SharedModule,
  ],
  templateUrl: './id-creation.component.html',
  styleUrl: './id-creation.component.css',
})
export class IdCreationComponent {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private localService: LocalStoreService,
  ) {
    // Initialize the form with validation
    this.form = this.fb.group({
      name: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      whatsappNo: ['', Validators.pattern('[0-9]{10}')],
      email: ['', [Validators.email]],
      address: [''],
      state: [null as State | null, Validators.required],
      district: [null as District | null, Validators.required],
      circle: [null as Circle | null, Validators.required],
      taluk: [null as Taluk | null, Validators.required],
      village: [null as Village | null],
    });
  }

  states = signal<State[]>([
    { name: 'Tamil Nadu', code: 'TN' },
    { name: 'Kerala', code: 'KL' },
    { name: 'Karnataka', code: 'KA' },
  ]);

  districts = signal<District[]>([]);
  circles = signal<Circle[]>([]);
  taluks = signal<Taluk[]>([]);
  villages = signal<Village[]>([]);

  ngOnInit() {
    const idCreationData = this.localService.getItem('idCreationData');
    const idCreationDataArrya = this.localService.getArray(
      'idCreationDataArray',
    );

    // Load initial data - replace with API calls
    this.loadDistricts();

    // Watch for state changes to load districts
    this.form.get('state')?.valueChanges.subscribe((state) => {
      if (state) {
        this.loadDistricts(state.code);
        this.form.get('district')?.reset();
        this.form.get('circle')?.reset();
        this.form.get('taluk')?.reset();
        this.form.get('village')?.reset();
      }
    });

    // Watch for district changes to load circles
    this.form.get('district')?.valueChanges.subscribe((district) => {
      if (district) {
        this.loadCircles(district.code);
        this.form.get('circle')?.reset();
        this.form.get('taluk')?.reset();
        this.form.get('village')?.reset();
      }
    });

    // Watch for circle changes to load taluks
    this.form.get('circle')?.valueChanges.subscribe((circle) => {
      if (circle) {
        this.loadTaluks(circle.code);
        this.form.get('taluk')?.reset();
        this.form.get('village')?.reset();
      }
    });

    // Watch for taluk changes to load villages
    this.form.get('taluk')?.valueChanges.subscribe((taluk) => {
      if (taluk) {
        this.loadVillages(taluk.code);
        this.form.get('village')?.reset();
      }
    });
  }

  // These methods will be replaced with API calls
  private loadDistricts(stateCode?: string) {
    const sampleDistricts: District[] = [
      { name: 'Chennai', code: 'CH', stateCode: 'TN' },
      { name: 'Coimbatore', code: 'CB', stateCode: 'TN' },
      { name: 'Madurai', code: 'MD', stateCode: 'TN' },
    ];
    this.districts.set(
      stateCode
        ? sampleDistricts.filter((d) => d.stateCode === stateCode)
        : sampleDistricts,
    );
  }

  private loadCircles(districtCode: string) {
    const sampleCircles: Circle[] = [
      { name: 'Circle 1', code: 'C1', districtCode: 'CH' },
      { name: 'Circle 2', code: 'C2', districtCode: 'CH' },
      { name: 'Circle 1', code: 'C1', districtCode: 'CB' },
    ];
    this.circles.set(
      sampleCircles.filter((c) => c.districtCode === districtCode),
    );
  }

  private loadTaluks(circleCode: string) {
    const sampleTaluks: Taluk[] = [
      { name: 'Taluk 1', code: 'T1', circleCode: 'C1' },
      { name: 'Taluk 2', code: 'T2', circleCode: 'C1' },
      { name: 'Taluk 1', code: 'T1', circleCode: 'C2' },
    ];
    this.taluks.set(sampleTaluks.filter((t) => t.circleCode === circleCode));
  }

  private loadVillages(talukCode: string) {
    const sampleVillages: Village[] = [
      { name: 'Village 1', code: 'V1', talukCode: 'T1' },
      { name: 'Village 2', code: 'V2', talukCode: 'T1' },
      { name: 'Village 1', code: 'V1', talukCode: 'T2' },
    ];
    this.villages.set(sampleVillages.filter((v) => v.talukCode === talukCode));
  }
  showError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control
      ? control.invalid && (control.dirty || control.touched)
      : false;
  }
  onSubmit() {
    if (!this.form.valid) {
      // console.log('Form invalid:', this.form.value);

      this.messageService.add({
        severity: 'error',
        summary: 'Form Error',
        detail: 'Please fill all required fields correctly.',
      });
    }
    if (this.form.valid) {
      try {
        this.localService.setItem('idCreationData', this.form.value);
        this.localService.addToArray('idCreationDataArray', this.form.value);
        this.messageService.add({
          severity: 'success',
          summary: 'Form Submitted',
          detail: 'ID Creation data has been saved successfully.',
        });
        const idCreationDataArray = this.localService.getArray(
          'idCreationDataArray',
        );
        const idCreationData = this.localService.getItem('idCreationData');
        // console.log('ID Creation Data:', idCreationData);
        // console.log('ID idCreationDataArrya:', idCreationDataArray);
      } catch (error) {
        console.error('Error during form submission:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Submission Error',
          detail: 'An error occurred while submitting the form.',
        });
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  onCancel() {
    this.form.reset();
  }
}
