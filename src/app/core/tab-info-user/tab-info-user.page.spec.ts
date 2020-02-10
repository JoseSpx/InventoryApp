import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabInfoUserPage } from './tab-info-user.page';

describe('TabInfoUserPage', () => {
  let component: TabInfoUserPage;
  let fixture: ComponentFixture<TabInfoUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabInfoUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabInfoUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
