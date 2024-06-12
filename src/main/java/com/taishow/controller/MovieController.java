package com.taishow.controller;

import com.taishow.entity.Movie;
import com.taishow.service.MovieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies") // 设定统一的url前缀
public class MovieController {

    private final MovieService movieService;

    // 构造函数注入依赖
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    // 创建电影
    @PostMapping
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
        Movie createdMovie = movieService.createOrUpdateMovie(movie);
        if (createdMovie != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdMovie);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // 獲取所有電影
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movieList = movieService.getAllMovies();
        if (!movieList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body(movieList);
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }

    // 根據id獲取電影
    @GetMapping("/{movieId}")
    public ResponseEntity<Movie> getMovieById(@PathVariable Integer movieId) {
        return movieService.getMovieById(movieId)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // 更新電影
    @PutMapping("/{movieId}")
    public ResponseEntity<Movie> updateMovie(@PathVariable Integer movieId, @RequestBody Movie movieDetails) {
        Movie updatedMovie = movieService.updateMovie(movieId, movieDetails);
        if (updatedMovie != null) {
            return ResponseEntity.status(HttpStatus.OK).body(updatedMovie);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // 删除電影
    @DeleteMapping("/{movieId}")
    public ResponseEntity<Void> deleteMovie(@PathVariable Integer movieId) {
        boolean isDeleted = movieService.deleteMovie(movieId);
        if (isDeleted) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    @GetMapping("/{movieId}")
    public ResponseEntity<Map<String, Object>> getMovieDetailsById(@PathVariable Integer movieId) {
        Optional<Movie> movieOptional = movieService.getMovieById(movieId);
        if (movieOptional.isPresent()) {
            Movie movie = movieOptional.get();
            Map<String, Object> movieData = new HashMap<>();
            movieData.put("src", movie.getPoster()); // 假设 poster 存储的是 base64 字符串
            movieData.put("alt", movie.getTitle());
            movieData.put("title", movie.getTitle());
            movieData.put("path", "/booking/" + movie.getId());
            return ResponseEntity.ok(movieData);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}