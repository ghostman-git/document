package com.zhoupb.readwritesplitting.mapper;

import com.zhoupb.readwritesplitting.entity.Test;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * @author zhoupb
 * @since 2021/6/18
 */
@Mapper
public interface TestMapper {

    @Insert("insert into t_test(name) values(#{name})")
    int save(Test test);

    @Select("select * from t_test where id=#{id}")
    Test selectById(Long id);
}
