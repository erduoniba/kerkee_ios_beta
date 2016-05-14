//
//  KCWebImageSetterTask.h
//  kerkee
//
//  Created by zihong on 15/8/25.
//  Copyright (c) 2015年 zihong. All rights reserved.
//



#ifndef SHF_KCWebImageSetterTask_h
#define SHF_KCWebImageSetterTask_h

#import "KCObject.h"
#import "KCWebView.h"

///< 该类的只是保存KCWebView实体和NSURL
@interface KCWebImageSetterTask : KCObject
{
}

- (id)initWithWebView:(KCWebView *)aWebView url:(NSURL*)aUrl;

//auto release
+ (KCWebImageSetterTask*)create:(KCWebView *)aWebView url:(NSURL*)aUrl;

-(NSURL*)url;

@end

#endif
