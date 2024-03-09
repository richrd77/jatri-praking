import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrl: './audio-recorder.component.scss'
})
export class AudioRecorderComponent implements OnInit {

  public IsRecording: boolean = false;

  @ViewChild('audioTag', { static: true }) private audio!: ElementRef<HTMLAudioElement>

  recorder: MediaRecorder | null;

  constructor() {
    this.recorder = null;
  }
  ngOnInit(): void {
    this.StartAudio();
  }

  public StartAudio(): void {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((s) => this.HandleAudioStream(s))
      .catch(e => this.HandleError(e));
  }

  private HandleError(err: any): void {
    console.log(err);
  }

  private HandleAudioStream(stream: any): void {
    this.IsRecording = true;
    this.recorder = new MediaRecorder(stream);
    let chunks: any[] = [];

    this.recorder.ondataavailable = (e) => chunks.push(e.data);

    this.recorder.onstop = a => {
      let blob = new Blob(chunks, { type: 'audio/mp3;' });
      chunks = [];
      var blobUrl = URL.createObjectURL(blob);
      this.audio.nativeElement.src = blobUrl;
      this.IsRecording = false;
    };

    this.recorder.start();
    // recorder.stop();
    console.log(stream);
  }

  public Stop(): void {
    if (!this.recorder) {
      console.log('recorderisnull');
    }
    this.recorder?.stop();
  }
}
