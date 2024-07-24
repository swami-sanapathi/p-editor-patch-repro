import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { EditorModule } from "primeng/editor";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [EditorModule, FormsModule, ButtonModule],
  template: `
    <div class="editor-container">
      <p-editor [(ngModel)]="title" [style]="{ height: '320px' }" />
      <div class="editor-container-buttons">
        <p-button (click)="onSubmit()"> Submit</p-button>
        <p-button (click)="onUpdate()"> Patch </p-button>
      </div>
    </div>
  `,
  styles: `
    .editor-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center
    }
    .editor-container-buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    p-button {
      padding: 10px;
    }
  
  `,
})
export class AppComponent {
  title = "";

  onSubmit() {
    console.log(this.title);
  }

  onUpdate() {
    this.title = "Updated";
  }
}
