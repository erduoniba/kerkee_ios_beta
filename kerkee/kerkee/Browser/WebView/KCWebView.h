//
//  KCWebView.h
//  kerkee
//
//  Created by zihong on 15/8/25.
//  Copyright (c) 2015年 zihong. All rights reserved.
//



#import <UIKit/UIKit.h>

@class KCWebView;

@protocol KCWebViewProgressDelegate <NSObject>
@optional
////返回一个标识符对象用来跟踪加载单个资源的进步
-(void)webView:(KCWebView*)webView identifierForInitialRequest:(NSURLRequest*)initialRequest;

-(void) webView:(KCWebView*)webView didReceiveResourceNumber:(int)resourceNumber totalResources:(int)totalResources;
@end

@interface KCWebView : UIWebView
{
    
}

@property (nonatomic, assign) int resourceCount;
@property (nonatomic, assign) int resourceCompletedCount;

@property (nonatomic, assign) IBOutlet id<KCWebViewProgressDelegate> progressDelegate;

- (void)setHitPageBottomThreshold:(float)aThreshold;
- (void)setIsPageScrollOn:(BOOL)aIsPageScrollOn;

- (int)getWebViewID;
- (void)documentReady:(BOOL)aIsReady;
- (BOOL)isDocumentReady;

- (id)getAttach;
- (void)setAttach:(id)aAttch;

@end
