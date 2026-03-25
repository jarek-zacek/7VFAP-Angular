import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Left } from './left';

describe('Left', () => {
  let component: Left;
  let fixture: ComponentFixture<Left>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Left],
    }).compileComponents();

    fixture = TestBed.createComponent(Left);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log a message when the button is clicked', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.textContent?.trim()).toBe('Text');

    button.click();
    fixture.detectChanges();

    expect(consoleSpy).toHaveBeenCalledWith('Left button clicked');
    expect(button.textContent?.trim()).toBe('Another text');

    consoleSpy.mockRestore();
  });
});
