//
//  ViewController.m
//  kerkeeDemo
//
//  Created by zihong on 15/8/25.
//  Copyright (c) 2015年 zihong. All rights reserved.
//

#import "ViewController.h"
#import "kerkee.h"
#import "KCRegistMgr.h"
#import "KCAssistant.h"
#import "KCBaseDefine.h"
#import "KCWebPathDefine.h"
#import "KCURIComponents.h"
#import "KCActionTest.h"
#import "KCUriRegister.h"
#import "KCUriDispatcher.h"
#import "KCFetchManifest.h"
#import "KCJSCompileExecutor.h"
#import "HDJSToOCManager.h"


@interface ViewController ()
{
    KCWebView* m_webView;
    KCJSBridge* m_jsBridge;
}

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    //addSkipBackupAttributeToItemAtURL
    

    
    m_webView = [[KCWebView alloc] initWithFrame:self.view.bounds];
    //add webview in your view
    [self.view addSubview:m_webView];
    //you can implement webview delegate
    m_jsBridge = [[KCJSBridge alloc] initWithWebView:m_webView delegate:self];

    
//    [self testFetchManifest];
//    
//    //test action
//    [self testAction];
    
   
    [self hdTest];
    
//    [self originTest];
    
    UIButton *bb = [UIButton buttonWithType:UIButtonTypeInfoLight];
    bb.frame = CGRectMake(100, 400, 50, 50);
    [bb addTarget:self action:@selector(bbbb) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:bb];
}

- (void)bbbb{
    [KCJSBridge callJSFunction:@"ocToJs" withJSONObject:@{@"hhh" : @"www"} WebView:m_webView];
}

- (void)originTest{
    KCAssistant* assistant = [[KCAssistant alloc] init];
    KCRelease(assistant);
    
    [KCRegistMgr registAllClass];
    
    NSString* pathTestHtml = [[NSBundle mainBundle] pathForResource:@"test.html" ofType:Nil];
    NSURL* url =[NSURL URLWithString:pathTestHtml];
    NSMutableURLRequest *request =[NSMutableURLRequest requestWithURL:url];
    [m_webView loadRequest:request];
}

- (void)hdTest{
    [KCJSBridge registObject:[[HDJSToOCManager alloc] init]];
    
//    NSArray *aa = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
//    NSString *documents = aa.firstObject;
//    NSString *filePath = [documents stringByAppendingPathComponent:@"pm-app/pages/pm/pm.html"];
//    NSURL *url = [NSURL fileURLWithPath:filePath];
    
    NSString *file = [[NSBundle mainBundle] pathForResource:@"redirect" ofType:@"html"];
    NSURL *url = [NSURL URLWithString:file];
    
    NSMutableURLRequest *request =[NSMutableURLRequest requestWithURL:url];
    [m_webView loadRequest:request];
}

-(void)testAction
{
    KCUriRegister* uriRegister = [KCUriDispatcher markDefaultRegister:@"kerkee"];
//    KCUriRegister* uriRegister = [KCUriDispatcher defaultUriRegister];
    KCActionTest* action = [[KCActionTest alloc] init];
    [uriRegister registerAction:action];
    
    [KCUriDispatcher dispatcher:@"kerkee://search/path?A=1&B=2&C=3&D=4"];
}


-(void)testFetchManifest
{
    KCURI* uriServer = [KCURI parse:@"http://www.linzihong.com/test/html/manifest"];
    [KCFetchManifest fetchOneServerManifest:uriServer block:^(KCManifestObject *aManifestObject) {
    }];
    [KCFetchManifest fetchServerManifests:uriServer block:^(KCManifestObject *aManifestObject) {
        
        KCLog(@"%@", aManifestObject);
    }];
    
    
    KCURI* uriLocal = [KCURI parse:[[NSHomeDirectory() stringByAppendingPathComponent:@"Documents/html"] stringByAppendingPathComponent:@"manifest"]];
//    [KCFetchManifest fetchOneLocalManifest:uriLocal block:^(KCManifestObject *aManifestObject)
//    {
//        KCLog(@"%@", aManifestObject);
//    }];
    
    [KCFetchManifest fetchLocalManifests:uriLocal block:^(KCManifestObject *aManifestObject) {
        KCLog(@"%@", aManifestObject);
    }];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


#pragma mark --
#pragma mark KCWebViewProgressDelegate

-(void)webView:(KCWebView*)webView identifierForInitialRequest:(NSURLRequest*)initialRequest
{
}

#pragma mark - UIWebView Delegate
- (void)webViewDidFinishLoad:(UIWebView *)aWebView
{
    NSString *scrollHeight = [aWebView stringByEvaluatingJavaScriptFromString:@"document.body.scrollHeight;"];
    NSLog(@"scrollHeight: %@", scrollHeight);
    NSLog(@"webview.contentSize.height %f", aWebView.scrollView.contentSize.height);
    NSLayoutConstraint *heightConstraint = [NSLayoutConstraint constraintWithItem:aWebView attribute:NSLayoutAttributeHeight relatedBy:NSLayoutRelationEqual toItem:nil attribute:NSLayoutAttributeNotAnAttribute multiplier:1.0 constant:[scrollHeight floatValue]];
    
//    [aWebView addConstraint:heightConstraint];
    NSLog(@"webview frame %@", NSStringFromCGRect(aWebView.frame));
}

- (void)webView:(UIWebView *)webView didFailLoadWithError:(NSError *)error
{
}

- (BOOL)webView:(UIWebView *)aWebView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
    return YES;
}


@end
