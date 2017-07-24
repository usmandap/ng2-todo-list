// import { Response, ResponseOptions } from '@angular/http';
// import { async, TestBed } from '@angular/core/testing';
// import { CommonModule } from '@angular/common/src/common';
// import { APP_BASE_HREF } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing'
// import { TodoListCustomMaterialModule } from '../todo-list-custom-material.module';
// import { TodoListDetailComponent } from './todo-list-detail.component';
// import { TodoService } from './todo-list-detail.service'
// import { Observable } from 'rxjs/Rx';
// import { BrowserModule } from '@angular/platform-browser';

// // function createRespone(body) {
// //     return Observable.of(
// //         new Response(new ResponseOptions({ body: JSON.stringify(body) }))
// //     )
// // }

// class MockFirebase {
//     fetchItems() {
//         return Observable.interval(500).map(i => [{
//             id: 1,
//             description: 'swim',
//             status: false
//         },
//         {
//             id: 2,
//             description: 'fish',
//             status: false
//         },
//         {
//             id: 3,
//             description: 'test',
//             status: true
//         }]);
//     }
// }


// // async beforeEach
// beforeEach(async(() => {
//     TestBed.configureTestingModule({
//         declarations: [
//             TodoListDetailComponent],
//         imports: [
//             // CommonModule,
//             BrowserModule,
//             FormsModule,
//             TodoListCustomMaterialModule,
//             RouterTestingModule
//         ],
//         providers: [{ provide: TodoService, useClass: MockFirebase }]
//         // declare the test component
//     })
//         .compileComponents();  // compile template and css
// }));
// it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(TodoListDetailComponent);
//     const app = fixture.debugElement.componentInstance;
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(true).toBeTruthy();
//     // expect(compiled.querySelector('h1').textContent).toContain('Welcome to Todo List App');
// }));
