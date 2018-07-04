package com.example.demo;

import org.postgresql.ds.PGPoolingDataSource;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
@ConfigurationProperties(prefix="spring.datasource")
public class ReactDemoConfiguration {

	@Bean
	@Primary
	public PGPoolingDataSource datasource() {
	PGPoolingDataSource datasource = new PGPoolingDataSource();
	datasource.setUser("postgres");
	datasource.setPassword("Secretofams01!");
	datasource.setUrl("jdbc:postgresql://localhost:5432/postgres");
	return datasource;
}
}
