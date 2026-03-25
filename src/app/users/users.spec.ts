import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users } from './users';

describe('Users', () => {
  let component: Users;
  let fixture: ComponentFixture<Users>;
  let httpTestingController: HttpTestingController;

  const mockUsers = [
    {
      age: 28,
      email: 'john.doe@example.com',
      firstName: 'John',
      id: '550e8400-e29b-41d4-a716-446655440001',
      lastName: 'Doe',
      orders: [
        {
          items: [],
          orderDate: '2026-01-15T10:30:00',
          orderDescription: 'Laptop and accessories',
          orderId: '660e8400-e29b-41d4-a716-446655440001',
        },
      ],
      password: 'secret',
      username: 'john_doe',
    },
    {
      age: 34,
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      id: '550e8400-e29b-41d4-a716-446655440002',
      lastName: 'Smith',
      orders: [
        {
          items: [],
          orderDate: '2026-01-25T09:15:00',
          orderDescription: 'Software licenses',
          orderId: '660e8400-e29b-41d4-a716-446655440003',
        },
        {
          items: [],
          orderDate: '2026-02-10T16:20:00',
          orderDescription: 'Cloud storage subscription',
          orderId: '660e8400-e29b-41d4-a716-446655440004',
        },
      ],
      password: 'secret',
      username: 'jane_smith',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Users],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(Users);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users into the table when the button is clicked', async () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    const request = httpTestingController.expectOne('/api/test/users');
    expect(request.request.method).toBe('GET');
    request.flush(mockUsers);

    await fixture.whenStable();
    fixture.detectChanges();

    const renderedText = fixture.nativeElement.textContent as string;
    expect(renderedText).toContain('John');
    expect(renderedText).toContain('jane.smith@example.com');
    expect(renderedText).toContain('2');
  });
});
