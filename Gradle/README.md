# 安装

```shell
# https://gradle.org/releases

# cp
sudo cp -r gradle-6.8.3 /opt/dev 

# 环境变量
sudo vim /etc/profile.d/gradle.sh

export GRADLE_HOME=/opt/dev/gradle-6.8.3
export PATH=$GRADLE_HOME/bin:$PATH

# 立即生效
source /etc/profile.d/gradle.sh

# 验证
gradle -v
```

# Wrapper

```shell
gradle init    # 后续带有选项操作。初始化带有Wrapper的Gradle项目
gradle wrapper # 在旧项目中添加Wrapper
```

# build.gradle

```
# 项目根目录
./gradlew wrapper

# 停止
./gradlew -stop
```

