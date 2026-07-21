package org.example.hirepath.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class JobService {

    @Value("${adzuna.app.id}")
    private String appId;

    @Value("${adzuna.app.key}")
    private String appKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public String searchJobs(
            String keyword,
            String location,
            String category,
            Integer salary
    ) {

        StringBuilder url = new StringBuilder(
                "https://api.adzuna.com/v1/api/jobs/in/search/1?"
        );

        url.append("app_id=").append(appId);
        url.append("&app_key=").append(appKey);

        if(keyword != null && !keyword.isEmpty()){

            url.append("&what=").append(keyword);

        }

        if(location != null && !location.isEmpty()){

            url.append("&where=").append(location);

        }

        if(category != null && !category.isEmpty()){

            url.append("&category=").append(category);

        }

        if(salary != null){

            url.append("&salary_min=").append(salary);

        }

        return restTemplate.getForObject(
                url.toString(),
                String.class
        );

    }


}