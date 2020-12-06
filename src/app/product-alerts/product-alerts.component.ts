import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: { name: String; weight: Number; age: String; desc: String };
  @Output() notify = new EventEmitter<Number>();
  constructor() {}

  ngOnInit() {}
}
