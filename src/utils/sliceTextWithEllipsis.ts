export function sliceTextWithEllipsis(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  let cuttedText = text.slice(0, maxLength - 1);

  if (cuttedText.at(-1) === ' ') {
    cuttedText = cuttedText.slice(0, -1);
    //  + '\xa0'; // Non-breakable space is char 0xa0 (String.fromCharCode(160))
  }

  return cuttedText + '…';
}
