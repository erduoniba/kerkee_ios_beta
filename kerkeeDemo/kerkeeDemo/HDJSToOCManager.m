//
//  HDJSToOCManager.m
//  KerkeeDemo
//
//  Created by 邓立兵 on 16/5/18.
//  Copyright © 2016年 邓立兵. All rights reserved.
//

#import "HDJSToOCManager.h"

#import <UIKit/UIKit.h>


@implementation HDJSToOCManager

- (NSString*)getJSObjectName{
    return @"kerkeeJSManager";
}

- (void)saveUserInfo:(NSString *)name :(NSString *)password{
//    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:@"js 上的点击件"
//                                                        message:nil
//                                                       delegate:nil
//                                              cancelButtonTitle:@"取消"
//                                              otherButtonTitles:name, password, nil];
//    [alertView show];
    
    NSLog(@"%@", name);
}

- (void)saveUserInfo2:(NSString *)name{
    NSLog(@"2 : %@", name);
}

@end
