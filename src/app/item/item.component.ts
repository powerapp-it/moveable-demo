import { Component, OnInit } from '@angular/core';
import {
  NgxMoveableModule,
  NgxMoveableComponent,
} from "ngx-moveable";


@Component({
  selector: 'app-item',
  template: `
    <div #target class="target">
    </div>
    <ngx-moveable
      [target]="target"
      [draggable]="true"
      [throttleDrag]="0"
      [resizable]="true"
      [keepRatio]="false"
      (resizeStart)="onResizeStart($event)"
      (resize)="onResize($event)"
      (resizeEnd)="onResizeEnd($event)"
      (dragStart)="onDragStart($event)"
      (drag)="onDrag($event)"
      (dragEnd)="onDragEnd($event)">
    </ngx-moveable>
  `,
  styleUrls: ['./item.component.scss']

})

export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  frame = {
    translate: [0, 0],
  };
  onDragStart({ set }) {
      set(this.frame.translate);
  }
  onDrag({ target, beforeTranslate }) {
      this.frame.translate = beforeTranslate;
      target.style.transform
          = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
  }
  onDragEnd({ target, isDrag, clientX, clientY }) {
      console.log("onDragEnd", target, isDrag);
  }
  onResizeStart({ target, set, setOrigin, dragStart }) {
    // Set origin if transform-orgin use %.
    setOrigin(["%", "%"]);

    // If cssSize and offsetSize are different, set cssSize. (no box-sizing)
    const style = window.getComputedStyle(target);
    const cssWidth = parseFloat(style.width);
    const cssHeight = parseFloat(style.height);
    set([cssWidth, cssHeight]);

    // If a drag event has already occurred, there is no dragStart.
    dragStart && dragStart.set(this.frame.translate);
  }
  onResize({ target, width, height, drag }) {
      target.style.width = `${width}px`;
      target.style.height = `${height}px`;

      // get drag event
      this.frame.translate = drag.beforeTranslate;
      target.style.transform
          = `translate(${drag.beforeTranslate[0]}px, ${drag.beforeTranslate[1]}px)`;
  }
  onResizeEnd({ target, isDrag, clientX, clientY }) {
      console.log("onResizeEnd", target, isDrag);
  }
}
