import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AudioRecorderComponent } from '../audio-recorder/audio-recorder.component';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss'
})
export class AudioComponent {

  @ViewChild('audioTem', { static: true }) private template!: TemplateRef<any>
  @ViewChild('audioTag', { static: true }) private audio!: ElementRef<HTMLAudioElement>

  recorder: MediaRecorder | null;

  constructor(private dialog: MatDialog) {
    this.recorder = null;
  }

  public StartAudio(): void {
    this.dialog.open(AudioRecorderComponent);
  }



}
