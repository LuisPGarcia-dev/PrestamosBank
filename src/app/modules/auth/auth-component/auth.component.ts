import { Component, OnInit, Input, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { FireAuthService } from '../../../services/fireAuth/fire-auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ModalRegisterComponent } from 'src/app/shared/components/modal-register/modal-register.component';
import { NgbModal, NgbModalRef, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  
  formData: FormGroup;
  closeResult: string;
  modalOptions: NgbModalOptions;
  @ViewChild('modal') modalContent: TemplateRef<ModalRegisterComponent>
  private modalRef: NgbModalRef

  constructor(private authService: FireAuthService,
              private modalService: NgbModal,
              private router: Router) { 
    this.formData = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    
  }

  ngOnInit(): void {
    console.log(this.modalContent, this.modalRef)
  }

  async onSubmit() {
    if(this.formData.valid) {
      console.log(this.formData.value);
      let user: any = await this.authService.login(
        this.formData.value.email,
        this.formData.value.password
      );
        console.log(user, 'user');
        // this.router.navigate(['/loans']);
    }
  }


  openModal() {
    this.modalService.open(this.modalContent, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
