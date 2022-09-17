[英文](README.md) | 中文  
# 咕咕镇反代——桃子镇
咕咕镇非官方反代，集成了各种实用脚本。演示地址：https://momo.inari.site   
要使用反代演示地址，请在 https://kf.inari.site 或 https://mkf.inari.site 登录账号，然后点击首页最下角的【咕咕镇】即可。   
使用演示地址请修改hosts文件，增加这行（为了劫持跳转）    
使用自建反代请在电脑上将hosts设置为   
`127.0.0.1 www.momozhen.com`    
这样访问momozhen.com会出错（如果本地搭了反代则可能需要暂时关闭nginx）   
这时可在地址栏获取 momozhen.com / 后的内容，复制此内容（含 / ）粘贴到你的自建反代地址后面并访问即可。    
已集成的实用脚本列表：   
[咕咕镇主题包管理器](https://greasyfork.org/scripts/450204)   
[咕咕镇数据采集](https://greasyfork.org/scripts/445173)   
[咕咕镇沙滩自动刷新](https://greasyfork.org/scripts/397225)   
[咕咕镇剩余价值收割机](https://greasyfork.org/scripts/408937)（由于跨域问题，去除对手神秘系数查询）   
由于不能依赖油猴，所以下脚本中依赖油猴的方法都做了替换，部分功能可能报错，如有报错请及时反馈。

## 部署  
1.部署Nginx服务(本地的话建议使用宝塔win面板。理论上1.18以上都ok，这边搭建环境是1.20）;   
2.以宝塔win面板为例，点击添加站点，域名可以就填guguzhen/momozhen，hosts里让域名指向127.0.0.1就行，证书用自签名证书应该就可以避免https错误信息了；
3.添加站点以后，在网站设置里点击并添加反向代理，反代的名字和反代的域名这里可以随便输入；
4.点击反代的配置文件，清空原有内容后，把[proxy.conf](https://github.com/HazukiKaguya/GuguTownProxy/blob/main/proxy.conf)里的内容复制并粘贴到配置文件中并保存即可。

## 赞助    
如果你喜欢桃子镇，你可以点击以下Vultr链接并注册使用来支持我。    
[Refer Vultr.com and earn $10 per paid signup](https://www.vultr.com/?ref=7365869)  
[Tell A Friend about Vultr and Earn up to $35 for referring clients!](https://www.vultr.com/?ref=9023177-8H)  

## 更新记录  
0.4.1 优化了反代设置，之后实用脚本代码的问题修复不再写入主页更新记录;   
0.4.0 大量优化了手机视图的CSS样式;   
0.3.2 修复了实用脚本代码的一些问题;    
0.3.0 整合了 剩余价值收割机;   
0.2.2 修复了实用脚本代码的一些问题;   
0.2.0 整合了 沙滩自动刷新&数据采集;   
0.1.0 整合了 主题包管理器;   
0.0.1 桃子镇反代测试部署.
