import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { StatisticsService } from '../../services/statistics.service';
import { Response } from '../../models/Response';
import { ModalData } from '../../models/ModalData';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  @Input() allItems: string[] = [];
  @Input() items: string[] = [];
  @Output() onSelectTag = new EventEmitter<ModalData>();

  loading: boolean = false;

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredItems: Observable<string[]>;
  itemControl = new FormControl();

  jobs: Array<{ name: string; value: number }> = [];
  developers: Array<{ name: string; value: number }> = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  colorScheme = {
    domain: ['#ccdc39'],
  };

  constructor(private statisticsService: StatisticsService) {
    this.filteredItems = this.itemControl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allItems.slice()
      )
    );
  }

  async ngOnInit() {
    if (screen.width < 600) {
      this.showLegend = false;
    }
    this.loading = true;
    for (let lenguage of this.items) {
      this.getJobInfoAndAddToChart(lenguage);
      this.getDeveloperInfoAndAddToChart(lenguage);
    }
    const interval = setInterval(() => {
      if (
        this.items.length === this.jobs.length &&
        this.items.length === this.developers.length
      ) {
        clearInterval(interval);
        this.loading = false;
      }
    }, 1000);
  }

  onSelect(event: object | string) {
    const eventOutput = {
      tag: '',
      developers: 0,
      jobs: 0,
    };
    switch (typeof event) {
      case 'string':
        eventOutput.tag = event;
        break;
      case 'object':
        const _event = event as { name: string; value: number };
        eventOutput.tag = _event.name;
        break;
    }
    const developers = this.developers.find((d) => d.name === eventOutput.tag);
    const jobs = this.jobs.find((j) => j.name === eventOutput.tag);

    eventOutput.developers = developers?.value || 0;
    eventOutput.jobs = jobs?.value || 0;

    this.onSelectTag.emit(eventOutput);
  }

  async add(event: MatChipInputEvent) {
    this.loading = true;
    const value = (event.value || '').trim();
    if (value) {
      this.items.push(value);
      await this.getJobInfoAndAddToChart(value);
      await this.getDeveloperInfoAndAddToChart(value);
    }
    event.chipInput!.clear();
    this.itemControl.setValue(null);
    this.loading = false;
  }

  remove(lenguage: string): void {
    const index = this.items.indexOf(lenguage);

    if (index >= 0) {
      this.items.splice(index, 1);

      /** delete the lenguage from developers array */
      const developersIndex = this.developers.findIndex((dev) => {
        return dev.name == lenguage;
      });
      console.log('developersIndex', developersIndex);
      if (developersIndex >= 0) {
        this.developers.splice(developersIndex, 1);
      }

      /** delete the lenguage from jobs array */
      const jobsIndex = this.jobs.findIndex((job) => {
        return job.name == lenguage;
      });
      if (jobsIndex >= 0) {
        this.jobs.splice(jobsIndex, 1);
      }

      /** Refresh the arrays */

      this.developers = [...this.developers];
      this.jobs = [...this.jobs];
    }
  }

  async selected(event: MatAutocompleteSelectedEvent) {
    this.loading = true;
    await this.getJobInfoAndAddToChart(event.option.viewValue);
    await this.getDeveloperInfoAndAddToChart(event.option.viewValue);

    this.items.push(event.option.viewValue);
    this.itemControl.setValue('');
    this.loading = false;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allItems.filter((item) =>
      item.toLowerCase().includes(filterValue)
    );
  }

  async getJobInfoAndAddToChart(tag: string) {
    const result = (await this.statisticsService
      .getJobs(tag)
      .toPromise()) as Response;
    console.log(result);

    const job = {
      value: result.total,
      name: tag,
    };

    this.jobs.push(job);
    this.jobs = [...this.jobs.sort(this.sort)];
  }

  async getDeveloperInfoAndAddToChart(tag: string) {
    const result = (await this.statisticsService
      .getDevelopers(tag)
      .toPromise()) as Response;
    console.log(result);

    const developer = {
      value: result.total,
      name: tag,
    };

    this.developers.push(developer);
    this.developers = [...this.developers.sort(this.sort)];
  }

  sort(a: any, b: any) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  }
}
