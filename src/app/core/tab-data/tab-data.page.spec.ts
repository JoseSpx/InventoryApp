import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabDataPage } from './tab-data.page';

describe('TabDataPage', () => {
  let component: TabDataPage;
  let fixture: ComponentFixture<TabDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
