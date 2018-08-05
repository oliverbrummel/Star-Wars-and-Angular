import { MyAngularMaterialModule } from './my-angular-material.module';

describe('MyAngularMaterialModule', () => {
  let myAngularMaterialModule: MyAngularMaterialModule;

  beforeEach(() => {
    myAngularMaterialModule = new MyAngularMaterialModule();
  });

  it('should create an instance', () => {
    expect(myAngularMaterialModule).toBeTruthy();
  });
});
