import {Component, OnInit} from '@angular/core';
import {MachineService} from '../machine.service';
import {Socket} from 'phoenix';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})
export class MachineListComponent implements OnInit {
  public machines: Machine[];

  constructor(
    private machineService: MachineService,
  ) {
    this.machines = [];
  }

  ngOnInit(): void {
    const socket = new Socket('ws://machinestream.herokuapp.com/api/v1/events');
    socket.connect();
    const channel = socket.channel('events', {});
    channel.join();

    this.machineService.getMachineList().subscribe((machines: MachineResponse) => {
      this.machines = machines.data;

      channel.on('new', (event) => {
        this.machines.map(machine => {
          if (machine.id === event.machine_id) {
            machine.status = event.status;
          }
        });
      });
    });
  }
}
