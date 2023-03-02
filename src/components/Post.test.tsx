import { describe, expect, it } from 'vitest';
import { logDOM, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PostModel } from '../utility/interface/post-model';
import Post from './Post';

const post: PostModel = {
  "authorName": "Ailey",
  "authorPhotoUrl": "http://dummyimage.com/111x100.png/ff4444/ffffff",
  "lastUpdated": "3/31/2022",
  "title": "tristique est et tempus semper est quam pharetra magna ac consequat metus sapien",
  "replyCount": 30,
  "likeCount": 1090,
  "webmVideoUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/small_watermarked/523445671_preview.webm",
  "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/small_watermarked/523445671_preview.mp4",
  "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg",
  isLike: false,
}

describe('Post render', () => {

  beforeEach(() => {
    render(<Post post={post}  />);
  })
  it('show reply check', () => {
    let div = screen.getByLabelText('check-reply', {selector: 'div'})
    expect(div).toBeInTheDocument();
  });

  it('show heart count', () => {
    let heartCountSpan = screen.getByLabelText('heart-count', {selector: 'span'})
    let heartCount = heartCountSpan.textContent;
    expect(heartCount).toBe("1.09K");
  });

  it('show reply count', () => {
    let replyCountSpan = screen.getByLabelText('reply-count', {selector: 'span'})
    let replyCount = replyCountSpan.textContent;
    expect(replyCountSpan).toBeInTheDocument();
    expect(replyCount).toBe('30');
  });
});

describe("Post reply", () => {

  beforeEach(() => {
    render(<Post post={post}  />);
  })

  it('send reply', () => {
    let replyInput = screen.getByLabelText('reply-input', {selector: 'input'})
    fireEvent.change(replyInput, {target: {value: 'good photo'}});
    fireEvent.keyUp(replyInput, {key: 'Enter'});
    expect(screen.getByLabelText('reply-message', {selector: 'div'}));
  });
})