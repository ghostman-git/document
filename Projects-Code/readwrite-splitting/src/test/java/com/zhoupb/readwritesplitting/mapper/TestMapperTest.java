package com.zhoupb.readwritesplitting.mapper;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

/**
 * @author zhoupb
 * @since 2021/6/18
 */
@SpringBootTest
class TestMapperTest {

    @Resource
    private TestMapper testMapper;

    @Test
    void save() {
        for (int i = 0; i < 5; i++) {
            com.zhoupb.readwritesplitting.entity.Test test = new com.zhoupb.readwritesplitting.entity.Test();
            test.setName("xiao" + i);
            this.testMapper.save(test);
        }
    }

    @Test
    void selectById() {
        com.zhoupb.readwritesplitting.entity.Test test = this.testMapper.selectById(612612264482549760L);
        System.out.println(test);
    }
}