import { CalculadoraService } from './../calculadora/services/calculadora.service';
import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private calculadoraService: CalculadoraService, private calculadora: CalculadoraComponent) { }

  ngOnInit(): void {
    
  }
}
