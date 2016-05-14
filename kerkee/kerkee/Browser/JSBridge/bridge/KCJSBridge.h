//
//  KCJSBridge.h
//  kerkee
//
//  Designed by zihong
//
//  Created by lijian on 15/8/25.
//  Copyright (c) 2015年 lijian. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "KCWebView.h"
#import "KCRegister.h"

@interface KCJSBridge : NSObject<UIWebViewDelegate>

- (id)initWithWebView:(KCWebView *)aWebView delegate:(id)delegate;

#pragma mark - register
//类注册的三种方式（KCRegister单例中有字典m_classMap保存对应的映射关系，key，value如下）
+ (KCClass*)registJSBridgeClient:(Class)aClass; //用类名注册 （value是aClass类对象 key为kJS_jsBridgeClient）
+ (KCClass*)registClass:(KCClass *)aClass;   //用KCClass类对象去注册（value是aClass类对象 key为初始化KCClass类对象的aJSClzName）
+ (KCClass*)registClass:(Class)aClass jsObjName:(NSString *)aJSObjectName; //用类名加key注册 （value是aClass类对象 key为aJSObjectName的值）

//对象注册的一种方式（KCRegister单例中有字典m_jsObjectMap保存对应的映射关系，key，value如下）
+ (KCClass*)registObject:(KCJSObject*)aObject; //用对象注册，KCJSObject作为抽象类，真正要为对象注册，需要继承KCJSObject并实现<KCJSObject>协议 （value是KCJSObject类对象 key为-getJSObjectName方法的值）

//根据value获取key的简单操作
+ (KCClass*)removeObject:(KCJSObject*)aObject;
+ (KCClass*)removeClass:(NSString*)aJSObjName;
+ (KCClass*)getClass:(NSString*)aJSObjName;

#pragma mark - callJS
+ (void)callJSOnMainThread:(KCWebView *)aWebView jsString:(NSString *)aJS;
+ (void)callJSFunctionOnMainThread:(KCWebView *)aWebView funName:(NSString *)aFunName args:(NSString *)aArgs;

+ (void)callJS:(KCWebView *)aWebView jsString:(NSString *)aJS;
+ (void)callJSFunction:(NSString *)function withJSONObject:(NSDictionary *)jsonObj WebView:(KCWebView*)webview;
+ (void)callJSFunction:(NSString *)function withJJSONString:(NSString *)jsonObj WebView:(KCWebView*)webview;

+ (void)callbackJS:(KCWebView *)aWebView callBackID:(NSString *)aCallbackId;
+ (void)callbackJS:(KCWebView *)aWebView callBackID:(NSString *)aCallbackId jsonString:(NSString *)aStr;
+ (void)callbackJS:(KCWebView *)aWebView callBackID:(NSString *)aCallbackId string:(NSString *)aStr;

#pragma mark - config
+ (void)openGlobalJSLog:(BOOL)aIsOpenJSLog;
+ (void)setIsOpenJSLog:(KCWebView*)aWebview isOpenJSLog:(BOOL)aIsOpenJSLog;

@end
