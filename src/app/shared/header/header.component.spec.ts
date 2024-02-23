import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory({
    component: HeaderComponent,
  });
  beforeEach(() => ( spectator = createComponent() ));
  it('should create a component', () => {
    expect(spectator.component).toBeTruthy();
  });
  it('should show brand logo', () => {
    expect(spectator.query('img')).toBeTruthy();
  })
});
