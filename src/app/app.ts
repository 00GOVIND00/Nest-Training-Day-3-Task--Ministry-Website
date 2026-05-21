import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Ministers } from "./pages/ministers/ministers";
import { Card } from "./components/card/card";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{}
