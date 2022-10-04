English | [Chinese](README.md)  
# GuguTown Proxy —— Peach(momo) Town
Webgame GuguTown unofficial froxy,with many useful plugins. Demo：https://momo.inari.site   
If use demo,please change your hosts file，add this line to change 302 jump:    
`149.28.60.240 www.momozhen.com`    
Don't use VPN when click 【咕咕镇】（not 【线路2】）at kfxxx/index.php to login. Or you can use plugin [HeaderEditor](https://github.com/FirefoxBar/HeaderEditor) to change 302 location.     
If you want to use demo on your phone,please set hosts file:   
`127.0.0.1 www.momozhen.com`    
then the access of momozhen.com will fail. if local proxy is deployed, you may need stop Nginx temporary.       
This time you can get what follows momozhen.com / copy it(include / ) and paste it after momo.inari.site ,then access the url. 
The List of Useful Plugins:   
[GuguTown Themepack Manager](https://greasyfork.org/scripts/450204)   
[GuguTown DAQ & Helper](https://greasyfork.org/scripts/445173)   
[GuguTown Auto Beach](https://greasyfork.org/scripts/397225)   
[GuguTown Auto Claw](https://greasyfork.org/scripts/408937)   
Some funcs may alert errors,if so,please open issues.

## Deploy  
1.Deploy Nginx. You can use aapanel to deploy. Nginx 1.18+ (The ver I use is Nginx 1.20);   
2.use aapanel as example: click 【add site】,input domain as www.guguzhen.com / www.momozhen.com ，let domain to 127.0.0.1 in hosts file;
3.After add site,add Proxy in settings;
4.click Proxy's conf,After clearing the original content, copy and paste the content in [proxy.conf] into the configuration file and save it.

## Sponsor    
If you like Peach(momo) Town, you can click the below Vultr links and use it.   
[Refer Vultr.com and earn $10 per paid signup](https://www.vultr.com/?ref=7365869)  
[Tell A Friend about Vultr and Earn up to $35 for referring clients!](https://www.vultr.com/?ref=9023177-8H)  

## Changelogs
0.4.1 optimized Proxy config;   
0.4.0 Greatly optimized the CSS style of the mobile view;      
0.3.2 fix some bugs in useful plugins;   
0.3.0 integrated with GuguTown Auto Claw Plugin;   
0.2.2 fix some bugs in useful plugins;   
0.2.0 integrated with GuguTown Auto Beach Plugin,GuguTown DAQ & Helper Plugin;   
0.1.0 integrated with GuguTown Themepack Manager Plugin;   
0.0.1 momoTown Proxy Deploy Test.
