import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabSearcherPage } from './tab-searcher.page';

describe('TabSearcherPage', () => {
  let component: TabSearcherPage;
  let fixture: ComponentFixture<TabSearcherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSearcherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabSearcherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
