import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    exports: [
        MatCheckboxModule,
        MatTableModule      
    ]
})
export class SharematerialModule { }