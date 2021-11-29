import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AmountService } from 'src/app/services/amount/amount.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { UsersService } from 'src/app/services/users/users.service';
import { AmountComponent } from 'src/app/shared/components/amount/amount.component';
import { LoansComponent } from '../loans/loans.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  usersList: any
  formData: FormGroup;
  amountSelected = 0;
  isShowingModal = false;
  totalAmount = 0;
  motivoRechazo = [
    'Mal Historial',
    'Datos insuficientes',
    'Falta de capital',
    'Buro de Credito',
    'Datos Falsos',
    'Sin avales',
    'Sin historial Crediticio'
  ]

  @ViewChild(LoansComponent) child: LoansComponent;
  @ViewChild(AmountComponent) children: AmountComponent;

  constructor(private userService: UsersService,
              private amountService: AmountService,
              private requestService: RequestsService) { 
    this.formData = new FormGroup({
      nombre: new FormControl(),
      email: new FormControl(),
      cedula: new FormControl(),
      fechaPago: new FormControl(),
      paidCredit: new FormControl(),
      approvedCredit: new FormControl()
    });
  }

  
  ngOnInit() {
    this.userService.getUsers().subscribe((response) => {
      this.usersList = response;
      console.log(response, this.usersList);
    });
  }

  getValueFromChild(receivedVal){
    this.amountSelected = this.child.amountValue;
    this.totalAmount = this.children.totalAmount
    console.log(this.child.amountValue, this.children.totalAmount)
  }

  getValue(event) {
console.log("FUNCIONO")
  }

  showModal() {
    this.isShowingModal = !this.isShowingModal;
  }

  async saveUser() {
    if(this.formData.valid && this.formData.value.paidCredit === 'Si') {
      console.log(this.formData.value, this.formData);
      await this.userService.createUsers({
        nombre: this.formData.value.nombre,
        email: this.formData.value.email,
        historial_prestamos: [],
        cedula: this.formData.value.cedula,
        credito_aprobado: this.formData.value.approvedCredit,
        pago_credito_pendiente: this.formData.value.paidCredit,
        valor_solicitado: this.amountSelected
      }).then((response: any) =>  {
        if(this.formData.value.approvedCredit === "aprobado") {
          console.log("entro");
          this.totalAmount = this.totalAmount - this.amountSelected;
          this.amountService.updateAmount({
            capital_base: this.totalAmount
          });
          this.requestService.postRequestApproved({
            nombre: this.formData.value.nombre,
            email: this.formData.value.email,
            monto: this.amountSelected,
            pagado: this.formData.value.paidCredit
          });
        } else {
          const randomRechazo = Math.floor(Math.random()*this.motivoRechazo.length);
          console.log(this.amountSelected)
          this.requestService.postRequestRejected({
            nombre: this.formData.value.nombre,
            email: this.formData.value.email,
            monto: this.amountSelected,
            motivo: this.motivoRechazo[randomRechazo]
          })
        }
      });
      // document.getElementById('#exampleModal').hide
    } else {
      alert("Tiene un Credito pendiente por pagar");
    }
  }
}
