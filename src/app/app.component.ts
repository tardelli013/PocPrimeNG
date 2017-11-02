import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poc PrimeNG';
  
  items = [
    {
        label: 'TV', icon: 'fa-check',
        items: [
            [
                {
                    label: 'TV 1',
                    items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                },
                {
                    label: 'TV 2',
                    items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                }
            ],
            [
                {
                    label: 'TV 3',
                    items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
                },
                {
                    label: 'TV 4',
                    items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                }    
            ]
        ]
    },
    {
        label: 'Sports', icon: 'fa-soccer-ball-o',
        items: [
            [
                {
                    label: 'Sports 1',
                    items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                },
                {
                    label: 'Sports 2',
                    items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                },

            ],
            [
                {
                    label: 'Sports 3',
                    items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                },
                {
                    label: 'Sports 4',
                    items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                }
            ],
            [
                {
                    label: 'Sports 5',
                    items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                },
                {
                    label: 'Sports 6',
                    items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                }
            ]
        ]
    },
    {
        label: 'Entertainment', icon: 'fa-child',
        items: [
            [
                {
                    label: 'Entertainment 1',
                    items: [{label: 'Entertainment 1.1'},{label: 'Entertainment 1.2'}]
                },
                {
                    label: 'Entertainment 2',
                    items: [{label: 'Entertainment 2.1'},{label: 'Entertainment 2.2'}]
                }
            ],
            [
                {
                    label: 'Entertainment 3',
                    items: [{label: 'Entertainment 3.1'},{label: 'Entertainment 3.2'}]
                },
                {
                    label: 'Entertainment 4',
                    items: [{label: 'Entertainment 4.1'},{label: 'Entertainment 4.2'}]
                }    
            ]
        ]
    },
    {
        label: 'Technology', icon: 'fa-gears',
        items: [
            [
                {
                    label: 'Technology 1',
                    items: [{label: 'Technology 1.1'},{label: 'Technology 1.2'}]
                },
                {
                    label: 'Technology 2',
                    items: [{label: 'Technology 2.1'},{label: 'Technology 2.2'}]
                },
                {
                    label: 'Technology 3',
                    items: [{label: 'Technology 3.1'},{label: 'Technology 3.2'}]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{label: 'Technology 4.1'},{label: 'Technology 4.2'}]
                }  
            ]
        ]
    }
];

  carros = [
    {
      id:'01',
      marca:'Toyota',
      modelo:'Corolla',
      combustivel:'Flex',
      motor:'1.8',
      valor:'R$ 73.000,00'
    },
    {
      id:'02',
      marca:'Toyota',
      modelo:'Etios',
      combustivel:'Flex',
      motor:'1.3',
      valor:'R$ 52.000,00'
    },
    {
      id:'03',
      marca:'Fiat',
      modelo:'Argo',
      combustivel:'Flex',
      motor:'1.4',
      valor:'R$ 48.000,00'
    },
    {
      id:'04',
      marca:'VW',
      modelo:'Fox',
      combustivel:'Flex',
      motor:'1.6',
      valor:'R$ 45.000,00'
    }, {
      id:'05',
      marca:'GM',
      modelo:'Onix',
      combustivel:'Flex',
      motor:'1.5',
      valor:'R$ 43.000,00'
    },
    {
      id:'06',
      marca:'Nissan',
      modelo:'March',
      combustivel:'Flex',
      motor:'1.6',
      valor:'R$ 66.000,00'
    },
    {
      id:'07',
      marca:'Ford',
      modelo:'Fiesta',
      combustivel:'Flex',
      motor:'1.5',
      valor:'R$ 50.000,00'
    },
    {
      id:'08',
      marca:'Ford',
      modelo:'KA',
      combustivel:'Flex',
      motor:'1.0',
      valor:'R$ 35.000,00'
    }
  ];
}
