package com.hrodrigues.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrodrigues.dsmovie.entities.Score;
import com.hrodrigues.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{}
