export interface MSOption {
  title: string;
  itemColor?: string;
  confirmButtonTextColor?: string;
  confirmButtonText?: string;
  cancelButtonTextColor?: string;
  cancelButtonText?: string;
  items: Array<any>;
  bindValue: string;
  ios?: MSiOSOption;
  onConfirm: (selectedItems: Array<any>) => void;
  onItemSelected?: (selectedItem: any) => void;
  onCancel?: () => void;
}
export interface MSiOSOption {
  cancelButtonBgColor: string;
  confirmButtonBgColor: string;
  image?: string;
  showType?: number;
  dismissType?: number;
}
export declare enum AShowType {
  TypeNone = 0,
  TypeFadeIn = 1,
  TypeGrowIn = 2,
  TypeShrinkIn = 3,
  TypeSlideInFromTop = 4,
  TypeSlideInFromBottom = 5,
  TypeSlideInFromLeft = 6,
  TypeSlideInFromRight = 7,
  TypeBounceIn = 8,
  TypeBounceInFromTop = 9,
  TypeBounceInFromBottom = 10,
  TypeBounceInFromLeft = 11,
  TypeBounceInFromRight = 12,
}
export declare enum ADismissType {
  TypeNone = 0,
  TypeFadeOut = 1,
  TypeGrowOut = 2,
  TypeShrinkOut = 3,
  TypeSlideOutToTop = 4,
  TypeSlideOutToBottom = 5,
  TypeSlideOutToLeft = 6,
  TypeSlideOutToRight = 7,
  TypeBounceOut = 8,
  TypeBounceOutToTop = 9,
  TypeBounceOutToBottom = 10,
  TypeBounceOutToLeft = 11,
  TypeBounceOutToRight = 12,
}

export declare class MultiSelect {
  private MSSelect;
  constructor();
  init(options: MSOption): void;
  show(options: MSOption): void;
  private dataArray(items, bindValue);
}
