import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notify from './Notify';
import { NotifyModel } from '../utility/interface/notify-model';
import { nowDateDiffSec } from '../utility/common/dateCalculate';

const notify: NotifyModel = {
  "notifyUser": {
    "name": "Lisa",
    "photoUrl": "/social-page-sample/dist//images/lisa.png",
  },
  "message": "回應了你的貼文",
  "time": "9/17/2022"
}

describe('Post render', () => {
  it('Display notification recent', () => {

    let nowDate = new Date();
    let newNotify:NotifyModel = {...notify, time: nowDate.toUTCString()};
    
    render(<Notify notify={newNotify}  />);
    let notifyTimeContent  = screen.getByLabelText('notify-time', {selector: 'div'})
    let notifyTimeContentText= notifyTimeContent.textContent;
    expect(notifyTimeContentText).toBe('剛剛');
  });

  it('Display notification from one minute ago.', () => {

    let nowDate = new Date();
    let dateOffset = (61*1000); //1 minute
    nowDate.setTime(nowDate.getTime() - dateOffset);
    let newNotify:NotifyModel = {...notify, time: nowDate.toUTCString()};
    
    render(<Notify notify={newNotify}  />);
    let notifyTimeContent  = screen.getByLabelText('notify-time', {selector: 'div'})
    let notifyTimeContentText= notifyTimeContent.textContent;
    expect(notifyTimeContentText).toBe('1分前');
  });
  
  it('Display notification from one one hour ago.', () => {

    const nowDate = new Date();
    const dateOffset = (60*60*1000) + 1; //1 hour
    nowDate.setTime(nowDate.getTime() - dateOffset);
    
    let newNotify:NotifyModel = {...notify, time: nowDate.toUTCString()};
    
    render(<Notify notify={newNotify}  />);
    let notifyTimeContent  = screen.getByLabelText('notify-time', {selector: 'div'})
    let notifyTimeContentText= notifyTimeContent.textContent;
    expect(notifyTimeContentText).toBe('1小時前');
  });

  it('Display notification from one one day ago.', () => {

    let nowDate = new Date();
    let dateOffset = (24*60*60*1000) + 1; //1 day
    nowDate.setTime(nowDate.getTime() - dateOffset);
    let newNotify:NotifyModel = {...notify, time: nowDate.toUTCString()};

    render(<Notify notify={newNotify}  />);
    let notifyTimeContent  = screen.getByLabelText('notify-time', {selector: 'div'})
    let notifyTimeContentText= notifyTimeContent.textContent;
    expect(notifyTimeContentText).toBe('1天前');
  });


});