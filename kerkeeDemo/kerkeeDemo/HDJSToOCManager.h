//
//  HDJSToOCManager.h
//  KerkeeDemo
//
//  Created by 邓立兵 on 16/5/18.
//  Copyright © 2016年 邓立兵. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "KCJSObject.h"

@interface HDJSToOCManager : KCJSObject

- (void)saveUserInfo:(NSString *)name :(NSString *)password;

- (void)saveUserInfo2:(NSString *)name;

@end
