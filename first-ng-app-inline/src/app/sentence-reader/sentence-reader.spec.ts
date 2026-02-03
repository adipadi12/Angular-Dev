import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceReader } from './sentence-reader';

describe('SentenceReader', () => {
  let component: SentenceReader;
  let fixture: ComponentFixture<SentenceReader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentenceReader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentenceReader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
