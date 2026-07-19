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

    public String getJobs(String keyword, String location) {

        String url = "https://api.adzuna.com/v1/api/jobs/in/search/1"
                + "?app_id=" + appId
                + "&app_key=" + appKey
                + "&what=" + keyword
                + "&where=" + location;

        return restTemplate.getForObject(url, String.class);
    }
}