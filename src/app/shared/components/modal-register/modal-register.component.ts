import { Component, ViewEncapsulation, ElementRef, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { AuthComponent } from 'src/app/modules/auth/auth-component/auth.component';

// import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.less']
})
export class ModalRegisterComponent implements OnInit {

  @ViewChild('modal') modalContent: TemplateRef<ModalRegisterComponent>
  private modalRef: NgbModalRef

  constructor(
    private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.modalContent);
  }

  open(): void {
    this.modalRef = this.modalService.open(ModalRegisterComponent)
    this.modalRef.result.catch(() => { 
      console.log("error");
    });
  }

  close() {
    this.modalRef.close()
  }

  dismiss() {
    this.modalRef.dismiss()
  }

}
