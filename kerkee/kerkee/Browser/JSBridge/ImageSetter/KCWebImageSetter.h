//
//  KCImageSetter.h
//  kerkee
//
//  Created by zihong on 15/8/25.
//  Copyright (c) 2015年 zihong. All rights reserved.
//



#ifndef SHF_KCImageSetter_h
#define SHF_KCImageSetter_h

#import "KCObject.h"
#import "KCWebImageSetterTask.h"

///< 缓存webview中的图片，缓存在KCImagePreCache中
@interface KCWebImageSetter : KCObject
{
    
}

-(void) handleImage:(KCWebImageSetterTask*)aTask;


@end

#endif
