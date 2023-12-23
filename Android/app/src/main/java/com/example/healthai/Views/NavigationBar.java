package com.example.healthai.Views;

import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import com.example.healthai.R;
import com.google.android.material.bottomnavigation.BottomNavigationView;
public class NavigationActivity extends AppCompatActivity {
    private FrameLayout frameLayout;
    private BottomNavigationView bottomNavigationView;
    private NavigationBarController controller;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_navigation_bar);

        frameLayout = findViewById(R.id.frame_layout);
        bottomNavigationView = findViewById(R.id.bottomNavigationView);

        controller = new NavigationBarController(this);
    }
    public BottomNavigationView getBottomNavigationView() {
        return bottomNavigationView;
    }
    public FrameLayout getFrameLayout() {
        return frameLayout;
    }

}
