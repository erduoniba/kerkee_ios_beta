//
//  HDJSToOCManager.m
//  KerkeeDemo
//
//  Created by 邓立兵 on 16/5/18.
//  Copyright © 2016年 邓立兵. All rights reserved.
//

#import "HDJSToOCManager.h"

#import <UIKit/UIKit.h>
#import "KCJSBridge.h"


@implementation HDJSToOCManager

- (NSString*)getJSObjectName{
    return @"kerkeeJSManager";
}


- (void)jsToOc:(KCWebView*)aWebView argList:(KCArgList*)args{
    NSLog(@"使用OC对象来处理JS的点击事件 args : %@", args);
}

- (void)mutualJSOC:(KCWebView*)aWebView argList:(KCArgList*)args{
    NSLog(@"使用OC对象来处理JS的点击事件 args : %@", args);
    
    NSMutableDictionary *dic = [NSMutableDictionary dictionary];
    [dic setObject:@"success" forKey:@"info"];
    NSString *json = [[NSString alloc] initWithData:[NSJSONSerialization dataWithJSONObject:dic options:0 error:nil] encoding:NSUTF8StringEncoding];
    KCAutorelease(json);
    //回调
    [KCJSBridge callbackJS:aWebView callBackID:[args getObject:@"callbackId"] jsonString:json];
}

@end
