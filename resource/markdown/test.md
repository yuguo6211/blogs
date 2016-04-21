1.在当前项目中，进入.git目录
```
    cd .git
```
2.执行如下命令
```
    find . -type f -empty -delete
```

3.退出.git目录，回到当前项目目录项，继续执行如下命令
```
    cd ../
    git fsck
```

4.将远程项目pull到本地
```
    git pull origin xxx:temp
```

5.就ok了，
```
    git status
```
