import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [TracksPageComponent],
  imports: [SharedModule, CommonModule, TracksRoutingModule],
})
export class TracksModule {}
