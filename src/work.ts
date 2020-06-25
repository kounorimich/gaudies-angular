import {Option} from '@angular/cli/models/interface';

export interface Work {
  id: number;
  title: string;
  releaseDate: Date;
  availability?: Availability;
  imgUrl?: string;
}

class Availability {
  workId: number;
  linkToSpotify?: string;
  linkToAppleMusic?: string;
  linkToVideo?: string;
}
