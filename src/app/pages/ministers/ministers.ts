import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { ministerdata } from '../../ministerdata';

@Component({
  selector: 'app-ministers',
  imports: [Card],
  templateUrl: './ministers.html',
  styleUrl: './ministers.css',
})
export class Ministers {
  items=ministerdata;
}
