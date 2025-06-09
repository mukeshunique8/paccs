import { Component } from '@angular/core';
import { NgPrimeModule } from '../../../modules/ngprime.module';
import { LocalStoreService } from '../../../service/local-store.service';
interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-id-creation-history',
  imports: [NgPrimeModule],
  templateUrl: './id-creation-history.component.html',
  styleUrl: './id-creation-history.component.css',
})
export class IdCreationHistoryComponent {
  cols!: Column[];
  users!: any;
  constructor(private localStoreService: LocalStoreService) {}

  async ngOnInit(): Promise<void> {
    const idCreationDataArray = await this.localStoreService.getArray(
      'idCreationDataArray',
    );
    console.log('idCreationDataArray', idCreationDataArray);
    this.users = idCreationDataArray?.map((user: any) => {
      return {
        name: user.name,
        email: user.email,
        mobileNo: user.mobileNo,
        whatsappNo: user.whatsappNo,
        state: user.state.name,
        address: user.address,
        circle: user.circle.name,
        district: user.district.name,
        taluk: user.taluk.name,
        village: user.village.name,
      };
    });
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'mobileNo', header: 'Mobile No' },
      { field: 'whatsappNo', header: 'WhatsApp No' },
      { field: 'state', header: 'State' },
      { field: 'address', header: 'Address' },
      { field: 'circle', header: 'Circle' },
      { field: 'district', header: 'District' },
      { field: 'taluk', header: 'Taluk' },
      { field: 'village', header: 'Village' },
    ];
  }
}
