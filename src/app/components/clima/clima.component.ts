import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  lat: number = 0
  long: number = 0

  manha = {
    tempMax: 0,
    tempMin: 0,
    resumo: ''
  }
  
  tarde = {
    tempMax: 0,
    tempMin: 0,
    resumo: ''
  }

  noite = {
    tempMax: 0,
    tempMin: 0,
    resumo: ''
  }

  cidadeSelecionada = {
    cod: 3550308,
    nome: ''
  }  
  dataSelecionada = ''
  periodo: any

  constructor(private climaService: ClimaService, private dataService: DataService) {
    this.periodo = dataService.setPeriodo()
    this.dataSelecionada = this.dataService.setHoje()
    this.getClima()
   }

  ngOnInit(): void {
  }
  
  //

  getLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude
        this.long = position.coords.longitude
      })
    }
  }

  setCidade(codCidade: number){
    this.cidadeSelecionada.cod = codCidade
    this.getClima()
  }

  getClima(){
    this.climaService.getClima(this.cidadeSelecionada.cod).subscribe(
      response => {
        console.log(response)
        this.cidadeSelecionada.nome = response[this.cidadeSelecionada.cod][this.dataSelecionada]['manha']['entidade']
        this.manha.tempMax = response[this.cidadeSelecionada.cod][this.dataSelecionada]['manha']['temp_max']
        this.manha.tempMin = response[this.cidadeSelecionada.cod][this.dataSelecionada]['manha']['temp_min']
        this.manha.resumo = response[this.cidadeSelecionada.cod][this.dataSelecionada]['manha']['resumo']

        this.tarde.tempMax = response[this.cidadeSelecionada.cod][this.dataSelecionada]['tarde']['temp_max']
        this.tarde.tempMin = response[this.cidadeSelecionada.cod][this.dataSelecionada]['tarde']['temp_min']
        this.tarde.resumo = response[this.cidadeSelecionada.cod][this.dataSelecionada]['tarde']['resumo']

        this.noite.tempMax = response[this.cidadeSelecionada.cod][this.dataSelecionada]['noite']['temp_max']
        this.noite.tempMin = response[this.cidadeSelecionada.cod][this.dataSelecionada]['noite']['temp_min']
        this.noite.resumo = response[this.cidadeSelecionada.cod][this.dataSelecionada]['noite']['resumo']
      }
    )
  }


  setData(data: string){
    if(data == "amanha"){
      this.dataSelecionada = this.dataService.setAmanha()      
    }else if(data == "hoje"){
      this.dataSelecionada = this.dataService.setHoje()
      console.log(this.dataSelecionada)
    }
    this.getClima()
  }
  //this.temp_max = response[this.cidadeSelecionada][this.dataSelecionada]['temp_max']


}



/*
  
  var geocoder

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng)
}

function errorFunction(){
    alert("Geocoder failed");
}

function initialize() {
    geocoder = new google.maps.Geocoder();
}

function codeLatLng(lat, lng) {
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      console.log(results)
      if (results[1]) {
        //formatted address
        alert(results[0].formatted_address)
        //find country name
        for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0; b<results[0].address_components[i].types.length;b++) {

              //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];
                    break;
                }
            }
        }
        //city data
        alert(city.short_name + " " + city.long_name)


        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }
</script> 
</head> 
<body onload="initialize()"> 
*/